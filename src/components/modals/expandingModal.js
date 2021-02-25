import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import * as PropTypes from "prop-types";

const ModalOverlay = styled.div``
const ModalContainer = styled.div`
  height: 200px;
  width: 200px;
  background-color: #282c34;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
`

const variants = {
  open: { opacity: 1, x: 0, scale: 1 },
  closed: { opacity: 0, x: 0, scale: 0.5 },
}

function ExpandingModal(props) {
  const { isOpen } = props
  return (
    <>
      <ModalOverlay/>

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <ModalContainer>
          Hello!
        </ModalContainer>
      </motion.div>
    </>
  )
}

ExpandingModal.defaultProps = {
  isOpen: true
}

ExpandingModal.propTypes = {
  isOpen: PropTypes.bool
}

export default ExpandingModal
