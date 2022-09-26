import { useState } from 'react'
import { Projects } from './'
import { SOCIAL_LINKS } from '../lib/constants'
import styles from './sidebar.module.css'

export default function Intro({ projects }) {
  const [showProjects, toggleProjects] = useState(false)

  return (
    <section className={styles.root}>
      <div className="mb-4">
        <h1>michael ciccarelli</h1>
        <p>
          brooklyn-based creative developer and consultant with years of
          experience in web development, design, and media.
        </p>
        <p>
          i work with brands, startups, and individuals, to plan and execute
          high-quality visual &amp; technical solutions — focusing my work on
          mobile-responsive websites, headless cms and e-commerce platforms, and
          ui interaction.
        </p>
        <p>
          previously, i've led technology initiatives and held various software
          engineering roles at Condé Nast, GREY Group, Knoll, THE WELL, and
          VICE.
        </p>
        <p>get in touch for business/inquiries:</p>
        <ul className="mb-7">
          <li className="no-icon">
            <a href="mailto:m@ciccarel.li?subject=Hello">m@ciccarel.li</a>
          </li>
          {SOCIAL_LINKS.map(({ href, handle, title }, idx) => (
            <li key={`social-link-${idx}`}>
              <a href={href} title={title} data-tooltip={handle}>
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="font-mono text-xs text-black mb-7">—</div>
        <ul className="flex flex-col mb-7">
          <ol>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault()
                toggleProjects(!showProjects)
              }}
            >
              {!showProjects ? 'Projects' : 'Close'}
            </a>
          </ol>
        </ul>
        {showProjects && <Projects show={showProjects} items={projects} />}
      </div>
    </section>
  )
}
