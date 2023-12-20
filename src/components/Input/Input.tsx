import './Input.css'
import { IInput } from '../../interfaces/IInput'

export const Input = ({type,value,placeholder,onChange}:IInput) => {
	return (
		<input className='input' type={type} value={value} onChange={onChange} placeholder={placeholder} />
	)
}
