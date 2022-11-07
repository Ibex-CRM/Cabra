import * as React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import {colors, space, fontSizes} from '../../tokens/js/variables';


const StyledTagPill = styled.div(
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
    const backgroundColor = () => {
      if (primary) return colors.primaryOrange;
      if (secondary) return colors.neutralS4;
      if (disabled) return colors.neutralS4;
      if (excluded) return colors.warningS4;
      if (positive) return colors.success;
      if (negative) return colors.supporting2;
      if (neutral) return colors.neutralS4;
    };

    const color = () => {
      if (primary) return colors.globalWhite;
      if (secondary) return colors.globalBlack;
      if (disabled) return colors.globalBlack;
      if (excluded) return colors.globalWhite;
      if (positive) return colors.globalWhite;
      if (negative) return colors.globalWhite;
      if (neutral) return colors.globalBlack;
    };

    return {
      textAlign: 'center',
      margin: `${space[2]} ${space[2]}`,
      'font-size': fontSizes[0],
      padding: `${space[1]} ${space[3]}`,
      maxWidth: space[9],
      // minHeight: theme.space[6],
      'border-radius': '20px',
      color: color(),
      'border-width': '0px',
      'background-color': backgroundColor(),
      opacity: disabled ? 0.6 : 1,
    };
  }
);

type TagPillProps = {
  /**
   * Primary variant of TagPill.
   */
  primary?: boolean;
  /**
   * Secondary variant of TagPill.
   */
  secondary?: boolean;
  /**
   * Specifies if the TagPill is disabled.
   */
  disabled?: boolean;
  /**
   * Excluded variant of TagPill.
   */
  excluded?: boolean;
  /**
   * Positive variant of TagPill.
   */
  positive?: boolean;
  /**
   * Negative variant of TagPill.
   */
  negative?: boolean;
  /**
   * Neutral variant of TagPill.
   */
  neutral?: boolean;
  /**
   * Child node(s) of the button.
   */
  children: ReactNode | ReactNode[];
};

/**
  TagPill component.
 */
export const TagPill = ({ ...otherProps }: TagPillProps) => {
  const theme = React.useContext(ThemeContext);

  const {
    primary,
    secondary,
    disabled,
    excluded,
    positive,
    negative,
    neutral,
  } = otherProps;

  return <StyledTagPill {...otherProps} />;
};
