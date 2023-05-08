import type { MotionValue } from "framer-motion"
import { useMotionValueEvent } from "framer-motion"
import { useRef, useEffect, useMemo, useCallback, memo } from "react"
import {
    ControlType,
    addPropertyControls,
    useIsInCurrentNavigationTarget,
} from "framer"
import {
    useOnEnter,
    useOnExit,
    defaultEvents,
    useIsOnCanvas,
    useIsBrowserSafari,
    useRadius,
    borderRadiusControl,
} from "https://framer.com/m/framer/default-utils.js@^0.45.0"
import { useAutoMotionValue } from "https://framer.com/m/framer/useAutoMotionValue.js@^0.3.0"

export interface VideoProps {
    backgroundColor?: string
    bottomLeft?: number
    bottomRight?: number
    canvasPlay?: boolean
    controls?: boolean
    isMixed?: boolean
    loop?: boolean
    muted?: boolean
    objectFit?: ObjectFitType
    onClick?: (Event: React.SyntheticEvent<HTMLElement>) => void
    onEnd?: (Event: React.SyntheticEvent<HTMLElement>) => void
    onMouseDown?: (Event: React.SyntheticEvent<HTMLElement>) => void
    onMouseEnter?: (Event: React.SyntheticEvent<HTMLElement>) => void
    onMouseLeave?: (Event: React.SyntheticEvent<HTMLElement>) => void
    onMouseUp?: (Event: React.SyntheticEvent<HTMLElement>) => void
    onPause?: (Event: React.SyntheticEvent<HTMLElement>) => void
    onPlay?: (Event: React.SyntheticEvent<HTMLElement>) => void
    onSeeked?: (Event: React.SyntheticEvent<HTMLElement>) => void
    playing?: boolean
    playsinline?: boolean
    poster?: string
    posterEnabled?: boolean
    progress?: number | MotionValue
    radius?: number
    restartOnEnter?: boolean
    srcFile?: string
    srcType?: SrcType
    srcUrl?: string
    startTime?: number
    topLeft?: number
    topRight?: number
    volume?: number
}

enum ObjectFitType {
    Fill = "fill",
    Contain = "contain",
    Cover = "cover",
    None = "none",
    ScaleDown = "scale-down",
}

enum SrcType {
    Video = "Upload",
    Url = "URL",
}

// Reduce renders
function getProps(props: any): any {
    const {
        width,
        height,
        topLeft,
        topRight,
        bottomRight,
        bottomLeft,
        id,
        children,
        ...rest
    } = props
    return rest
}

/**
 * VIDEO
 *
 * @framerIntrinsicWidth 200
 * @framerIntrinsicHeight 112
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */
export function Video(props) {
    const newProps = getProps(props)
    return <VideoMemo {...newProps} />
}

/**
 * For the useEffect hook to change progress of the video on state change.
 * It was causing the video to restart on hydration
 */
let isMountedAndReadyForProgressChanges = false

const VideoMemo = memo(function VideoInner(props: VideoProps) {
    const {
        srcType,
        srcFile,
        srcUrl,
        playing,
        canvasPlay,
        muted,
        playsinline,
        controls,
        progress,
        objectFit,
        backgroundColor,
        radius,
        topLeft,
        topRight,
        bottomRight,
        bottomLeft,
        isMixed,
        onSeeked,
        onPause,
        onPlay,
        onEnd,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        poster,
        restartOnEnter,
        posterEnabled,
        startTime: startTimeProp,
        volume,
        loop,
    } = props

    const isInCurrentNavigationTarget = useIsInCurrentNavigationTarget()
    const videoRef = useRef<HTMLVideoElement>()
    const isSafari = useIsBrowserSafari()
    const requestingPlay = useRef<boolean>(false)
    const wasPausedOnLeave = useRef<boolean | null>(null)
    const wasEndedOnLeave = useRef<boolean | null>(null)
    const isOnCanvas = useIsOnCanvas()
    const borderRadius = useRadius(props)

    // Video elements behave oddly at 100% duration
    const startTime = startTimeProp === 100 ? 99.9 : startTimeProp
    const shouldPlay = !isOnCanvas || canvasPlay
    const autoPlay = useMemo(() => playing, [])
    const isMuted = useMemo(
        () => (isOnCanvas ? true : muted),
        [isOnCanvas, muted]
    )

    const setProgress = useCallback((rawProgress) => {
        if (!videoRef.current) return

        const newProgress =
            (rawProgress === 1 ? 0.999 : rawProgress) *
            videoRef.current.duration

        const isAlreadySet =
            Math.abs(videoRef.current.currentTime - newProgress) < 0.1

        if (videoRef.current.duration > 0 && !isAlreadySet) {
            videoRef.current.currentTime = newProgress
        }
    }, [])

    const play = useCallback(() => {
        const isPlaying =
            videoRef.current.currentTime > 0 &&
            videoRef.current.onplaying &&
            !videoRef.current.paused &&
            !videoRef.current.ended &&
            videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA

        if (
            !isPlaying &&
            videoRef.current &&
            !requestingPlay.current &&
            isInCurrentNavigationTarget
        ) {
            requestingPlay.current = true
            videoRef.current
                .play()
                .catch((e) => {}) // It's likely fine, swallow error
                .finally(() => (requestingPlay.current = false))
        }
    }, [])

    const pause = useCallback(() => {
        if (!videoRef.current || requestingPlay.current) return
        videoRef.current.pause()
    }, [])

    // Pause/play via props
    useEffect(() => {
        if (playing && shouldPlay) play()
        else pause()
    }, [playing, canvasPlay])

    // Change progress via prop
    useEffect(() => {
        if (isMountedAndReadyForProgressChanges) setProgress(startTime * 0.01)
        else isMountedAndReadyForProgressChanges = true
    }, [startTimeProp, srcFile, srcUrl])

    const videoProgress = useAutoMotionValue(progress, {
        transform: (value) => value * 0.01,
        onChange: (newValue) => {
            setProgress(newValue)
        },
    })

    // Allow scrubbing with MotionValue
    useMotionValueEvent(videoProgress, "change", (latest) => {
        if (!isOnCanvas) setProgress(latest)
    })

    // (Prototyping) Checking if we need to play on navigation enter
    useOnEnter(() => {
        if (wasPausedOnLeave.current === null) return
        if (videoRef.current) {
            // if (restartOnEnter) setProgress(0)
            if ((!wasEndedOnLeave && loop) || !wasPausedOnLeave.current) play()
        }
    })

    // (Prototyping) Pausing & saving playing state on navigation exit
    useOnExit(() => {
        if (videoRef.current) {
            wasEndedOnLeave.current = videoRef.current.ended
            wasPausedOnLeave.current = videoRef.current.paused
            pause()
        }
    })

    const src = useMemo(() => {
        if (srcType === SrcType.Url) return srcUrl
        if (srcType === SrcType.Video) return srcFile
    }, [srcType, srcFile, srcUrl])

    // Autoplay via JS to work in Safari
    useEffect(() => {
        if (isSafari && videoRef.current && autoPlay) {
            setTimeout(() => play(), 50)
        }
    }, [])

    // Volume Control
    useEffect(() => {
        if (videoRef.current && !muted) videoRef.current.volume = volume / 100
    }, [volume])

    // When video is ready, set start-time, then autoplay if needed
    const handleReady = () => {
        if (videoRef.current && videoRef.current.currentTime < 0.3)
            setProgress(startTime * 0.01)
        if (shouldPlay && videoRef.current && autoPlay) play()
    }

    return (
        <video
            {...{
                onClick,
                onMouseEnter,
                onMouseLeave,
                onMouseDown,
                onMouseUp,
            }}
            src={src}
            loop={loop}
            ref={videoRef}
            onSeeked={(e) => onSeeked?.(e)}
            onPause={(e) => onPause?.(e)}
            onPlay={(e) => onPlay?.(e)}
            onEnded={(e) => onEnd?.(e)}
            autoPlay={autoPlay && shouldPlay}
            poster={posterEnabled ? poster : undefined}
            onLoadedData={handleReady}
            controls={controls}
            muted={isMuted}
            playsInline={playsinline}
            style={{
                width: "100%",
                height: "100%",
                borderRadius,
                display: "block",
                objectFit: objectFit,
                backgroundColor: backgroundColor,
                objectPosition: "50% 50%",
            }}
        />
    )
})

Video.displayName = "Video"

Video.defaultProps = {
    srcType: SrcType.Url,
    srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
    srcFile: "",
    posterEnabled: false,
    controls: false,
    autoPlay: true,
    canvasPlay: false,
    loop: true,
    muted: true,
    playsinline: true,
    restartOnEnter: false,
    objectFit: ObjectFitType.Cover,
    backgroundColor: "rgba(0,0,0,0)",
    radius: 0,
    volume: 25,
    startTime: 0,
}

addPropertyControls(Video, {
    srcType: {
        type: ControlType.Enum,
        displaySegmentedControl: true,
        title: "Source",
        options: [SrcType.Url, SrcType.Video],
    },
    srcUrl: {
        type: ControlType.String,
        title: " ",
        placeholder: "../example.mp4",
        hidden(props) {
            return props.srcType === SrcType.Video
        },
        description:
            "Hosted video file URL. For Youtube, use the Youtube component.",
    },
    srcFile: {
        type: ControlType.File,
        title: " ",
        allowedFileTypes: ["mp4"],
        hidden(props) {
            return props.srcType === SrcType.Url
        },
    },
    playing: {
        type: ControlType.Boolean,
        title: "Playing",
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    posterEnabled: {
        type: ControlType.Boolean,
        title: "Poster",
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    poster: {
        type: ControlType.Image,
        title: " ",
        hidden: ({ posterEnabled }) => !posterEnabled,
    },
    backgroundColor: {
        type: ControlType.Color,
        title: "Background",
    },
    ...borderRadiusControl,
    startTime: {
        title: "Start Time",
        type: ControlType.Number,
        min: 0,
        max: 100,
        step: 0.1,
        unit: "%",
    },
    loop: {
        type: ControlType.Boolean,
        title: "Loop",
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    objectFit: {
        type: ControlType.Enum,
        title: "Fit",
        options: [
            ObjectFitType.Cover,
            ObjectFitType.Fill,
            ObjectFitType.Contain,
            ObjectFitType.ScaleDown,
            ObjectFitType.None,
        ],
    },
    canvasPlay: {
        type: ControlType.Boolean,
        title: "On Canvas",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        hidden(props) {
            return props.autoPlay === false
        },
    },
    // restartOnEnter: {
    //     type: ControlType.Boolean,
    //     title: "On ReEnter",
    //     enabledTitle: "Restart",
    //     disabledTitle: "Resume",
    // },
    controls: {
        type: ControlType.Boolean,
        title: "Controls",
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    muted: {
        type: ControlType.Boolean,
        title: "Muted",
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    volume: {
        type: ControlType.Number,
        max: 100,
        min: 0,
        unit: "%",
        hidden: ({ muted }) => muted,
    },
    onEnd: { type: ControlType.EventHandler },
    onSeeked: { type: ControlType.EventHandler },
    onPause: { type: ControlType.EventHandler },
    onPlay: { type: ControlType.EventHandler },
    ...defaultEvents,
})
