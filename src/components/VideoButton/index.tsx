import { PlayOutline32 } from '@carbon/icons-react'
import { Modal } from 'carbon-components-react'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

type VideoButtonProps = {
  readonly title: string
  readonly subtitle: string
}

const VideoButton = ({ title, subtitle }: VideoButtonProps) => {
  const iFrameRef = useRef<HTMLIFrameElement>()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const iframe = iFrameRef.current
    const video = iframe.querySelector('video')

    if (!open) {
      if (iframe) {
        const iframeSrc = iframe.src
        iframe.src = iframeSrc
      }

      if (video) {
        video.pause()
      }
    }
  }, [open])

  return (
    <>
      <button className={styles.VideoButton} onClick={() => setOpen(true)}>
        <PlayOutline32 className={styles.Icon} />
        <div>
          <span className={styles.Title}>{title}</span>
          <span className={styles.Subtitle}>{subtitle}</span>
        </div>
      </button>
      <Modal
        className={styles.Modal}
        open={open}
        passiveModal
        size="lg"
        onRequestClose={() => setOpen(false)}
        modalHeading={title}
      >
        <div className={styles.Video}>
          <iframe
            ref={iFrameRef}
            src="https://www.youtube-nocookie.com/embed/U5eK56asMSQ?modestbranding=1"
            title="Video player"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  )
}

export default VideoButton
