import { cva, VariantProps } from "class-variance-authority";
import styles from "../styles/button.module.css";

const button = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary
    }
  },
  compoundVariants: [
    { intent: "primary" },
  ],
  defaultVariants: {
    intent: "primary",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: FC<ButtonProps> = ({children, className, intent, size, ...props}) => {
  return (
    <button className={button({ intent, size, className })} {...props} >
      {children}
    </button>
  )
}
export const Button;