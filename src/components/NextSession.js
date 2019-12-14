import React from "react"
import Button from "./Button"
import PropTypes from "prop-types"

const NextSession = ({ session }) => {
  const {
    title,
    date,
    htmlDate,
    time,
    location,
    speaker,
    job,
    url,
  } = session.frontmatter;

  return (
    <div>
      <div className="container grid-layout">
        <div className="cta">
          <Button className="btn-lg" href={url}>
            Register
            <span className="sr-only">{title}</span>
          </Button>
        </div>
        <div className="grid-session">
          <p style={{ gridColumn: "date", lineHeight: 1 }}>
            <time
              className="text-secondary lead font-weight-bold"
              dateTime={htmlDate}
            >
              {date}
            </time>
          </p>
          <h2 className="display-1" style={{ gridColumn: "title" }}>
            {title}
          </h2>

          {session.html && (
            <div style={{ gridColumn: "body" }} dangerouslySetInnerHTML={{__html: session.html}}/>
          )}

          <div className="font-weight-medium" style={{ gridColumn: "speaker" }}>
            <p>
              <span className="text-secondary">{speaker}</span>
              <br />
              {job}
            </p>
          </div>
          <div className="font-weight-medium" style={{ gridColumn: "time" }}>
            <p>
              <span className="text-secondary">
                <time dateTime={time}>{time}</time>
              </span>
              <br />
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

NextSession.propTypes = {
  session: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      htmlDate: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default NextSession
