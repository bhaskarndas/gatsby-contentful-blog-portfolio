import React from "react"
import Title from "../Title"
import styled from "styled-components"

const MapContact = () => {
  return (
    <section>
      <Title title="Join us" subtitle="in studio" />
      <MapWrapper>
        <iframe
          id="maps_frame"
          title="change-maps"
          frameBorder="0"
          width="100%"
          height="350px"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.6143304612497!2d78.29068951441839!3d30.105229881860197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093df8048505d5%3A0xade4df44835dacb4!2sSanrachna%20Kriti%20(Ar.%20Shobha%20Rajvanshi)!5e0!3m2!1sen!2sin!4v1618980292135!5m2!1sen!2sin"
          aria-label="Via oriani 22 Cervia"
        ></iframe>
      </MapWrapper>
    </section>
  )
}

const MapWrapper = styled.div`
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};

  &:hover {
    box-shadow: ${props => props.theme.darkShadow};
  }
`

export default MapContact
