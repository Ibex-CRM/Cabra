import styled from 'styled-components';
const tokens = require('../styles/js/variables');


const TagPill = styled.div(
  ({
    theme,
    primary = false,
    secondary = false,
    disabled = false,
    excluded = false,
    positive = false,
    negative = false,
    neutral = false,
  }) => {
    theme.length ? null : theme = tokens['light'];

    const backgroundColor = () => {
      if (primary) return theme.goatPrimary.value;
      if (secondary) return theme.neutral400.value;
      if (disabled) return theme.neutral400.value;
      if (excluded) return theme.warning400.value;
      if (positive) return theme.success.value;
      if (negative) return theme.supporting2.value;
      if (neutral) return theme.neutral400.value;
    };

    const color = () => {
      if (primary) return theme.globalWhite.value;
      if (secondary) return theme.globalBlack.value;
      if (disabled) return theme.globalBlack.value;
      if (excluded) return theme.globalWhite.value;
      if (positive) return theme.globalWhite.value;
      if (negative) return theme.globalWhite.value;
      if (neutral) return theme.globalBlack.value;
    };

    return {
      textAlign: 'center',
      margin: `${theme.space2.value} ${theme.space2.value}`,
      fontSize: theme.fontSize0.value,
      padding: `${theme.space1.value} ${theme.space3.value}`,
      maxWidth: theme.space9.value,
      // minHeight: theme.space[6],
      borderRadius: theme.borderRadius3.value,
      color: color(),
      borderWidth: '0px',
      backgroundColor: backgroundColor(),
      opacity: disabled ? 0.6 : 1,
    };
  }
)

export default TagPill
