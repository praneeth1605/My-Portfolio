import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.primary};
    color: white;
    
    &:hover {
      background: ${({ theme }) => theme.primaryDark};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.secondary};
    color: white;
    
    &:hover {
      background: ${({ theme }) => theme.secondaryDark};
    }
  `,
  accent: css`
    background: ${({ theme }) => theme.accent};
    color: white;
    
    &:hover {
      background: ${({ theme }) => theme.accentDark};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.primary};
    
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: white;
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.text};
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `,
};

const sizes = {
  small: css`
    padding: 8px 16px;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 12px 20px;
    font-size: 1rem;
  `,
  large: css`
    padding: 16px 24px;
    font-size: 1.125rem;
  `,
};

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  ${({ variant }) => variants[variant] || variants.primary};
  ${({ size }) => sizes[size] || sizes.medium};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    font-size: 1.2em;
  }
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon, 
  iconPosition = 'left',
  ...props 
}) => {
  return (
    <StyledButton 
      variant={variant} 
      size={size} 
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </StyledButton>
  );
};

export default Button;