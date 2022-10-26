import styled from 'styled-components'

export const TagPill = styled.div`
  ${(props) => (props.hide ? `display: none;` : '')}
  font-size: 10px;
  font-weight: 400;
  padding: 0px 7px;
  color: ${(props) => props.theme.globalBlack};
  background: ${(props) => props.theme.neutral400};
  border-radius: 20px;

  /* Displaying a primary, excluded or diabled */
  ${(props) => (props.primary ? `background: ${props.theme.goatPrimary}; color: ${props.theme.globalWhite}` : '')}
  ${(props) => (props.excluded ? `background: ${props.theme.warning300}; color:  ${props.theme.globalWhite};` : ``)}
  ${(props) => (props.disabled ? `background: ${props.theme.neutral400};` : ``)}

  /* Displaying a trait */
  ${(props) =>
    props.traitType === 'positive'
      ? `background: ${props.theme.success}; color:  ${props.theme.globalWhite};`
      : props.traitType === 'negative'
        ? `background: ${props.theme.supporting2}; color:  ${props.theme.globalWhite};`
        : props.traitType === 'neutral'
          ? `background: ${props.theme.neutral400}; color:  ${props.theme.globalBlack};`
          : ''}

  /* Displaying a status */
  ${(props) => (props.status === 'approved'
    ? `background: ${props.theme.success}; color:  ${props.theme.globalWhite};`
    : props.status === 'rejected'
      ? `background: ${props.theme.supporting2}; color:  ${props.theme.globalWhite};`
      : props.status === 'pending'
        ? `background: ${props.theme.secondaryAmber}; color:  ${props.theme.globalWhite};`
        : props.status === 'proposed'
          ? `background: ${props.theme.supporting3}; color:  ${props.theme.globalWhite};` : '')}

  /* Passing custom colors */
  ${(props) => (props.backgroundColor ? `background: ${props.backgroundColor}` : '')}
  ${(props) => (props.textColor ? `color: ${props.textColor}` : '')}
`

export const TagPillsContainer = styled.div`
  display: flex;
  padding: 10px 10px;
  ${(props) => (props.noPadding ? `padding: 0` : '')}
  ${(props) => (props.flexWrap ? `flex-wrap: wrap;` : '')}
  margin: 0;
  gap: 6px;
`
