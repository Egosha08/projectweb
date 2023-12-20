import './Button.css'
import { IButton } from '../../interfaces/IButton'
export const Button = ({children}:IButton) => {
	return (
		<button className='btn-primary' type='submit'>{children}</button>
	)
}
