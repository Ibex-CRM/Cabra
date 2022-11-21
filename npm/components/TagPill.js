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

    theme.length ? null : theme = tokens['Core'];
    const {colors, space, fontSize, radii} = theme

    const backgroundColor = () => {
      if (primary) return colors.primary.goat.value;
      if (secondary) return colors.neutral.s400.value;
      if (disabled) return colors.neutral.s400.value;
      if (excluded) return colors.destructive.s400.value;
      if (positive) return colors.success.main.value;
      if (negative) return colors.supporting2.main.value;
      if (neutral) return colors.neutral.s400.value;
    };

    const color = () => {
      if (secondary) return colors.global.black.value;
      if (disabled) return colors.global.black.value;
      if (neutral) return colors.global.black.value;
      else return colors.global.white.value
    };

    return {
      textAlign: 'center',
      margin: `${space['2'].value} ${space['2'].value}`,
      fontSize: fontSize['0'].value,
      padding: `${space['1'].value} ${space['1'].value}`,
      maxWidth: space['9'].value,
      minWidth: space['8'].value,
      borderRadius: radii['3'].value,
      color: color(),
      backgroundColor: backgroundColor(),
      opacity: disabled ? 0.6 : 1,
    };
  }
)

export default TagPill
