import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { imageBuilder } from '../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'
import markdownStyles from './markdown-styles.module.css'
import cn from 'classnames'

const Projects = ({ items, show }) => {
  const [active, setActive] = useState(null)
  // const { _id, body, coverImage, date, slug, title, url } = active

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
      },
    }),
    hidden: { opacity: 0, y: '-50%' },
  }

  const image = (
    <img
      alt={`Cover Image for ${items[active]?.title}`}
      className={cn('block w-full h-full object-cover', {
        'hover:shadow-medium transition-shadow duration-200':
          items[active]?.slug,
      })}
      src={imageBuilder(items[active]?.coverImage)
        .width(1280)
        .auto('format')
        .url()}
    />
  )

  return (
    <div className="w-full flex flex-col">
      <div>
        {show && (
          <motion.ul
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            variants={container}
          >
            {items.map(({ title, url }, idx) => (
              <motion.li
                key={`project-${idx}`}
                custom={idx}
                initial="hidden"
                animate={show ? 'visible' : 'hidden'}
                variants={variants}
                className={cn({ 'pointer-events-none': !show })}
              >
                <a
                  onMouseEnter={() => setActive(idx)}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
      <div className="hidden md:block fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto opacity-75 scale-50 hover:scale-100 hover:opacity-100 transition duration-150 ease-in-out hover:shadow-md">
        {active != null && (
          <>
            <a href={items[active]?.url} target="_blank" rel="noreferrer">
              {image}
            </a>
            {/* <div className="flex justify-between text-sm py-2">
              <div>
                <BlockContent
                  blocks={items[active]?.body}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  className={markdownStyles.markdown}
                />
              </div>
              <div>
                <a href={items[active]?.url}>visit &rarr;</a>
              </div>
            </div> */}
          </>
        )}
      </div>
    </div>
  )
}

export default Projects
