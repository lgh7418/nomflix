import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, popular, aitingToday, error, loading }) =>
  null;

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  aitingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
