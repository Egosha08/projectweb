import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { deleteTodo, fetchTodo, postTodo } from '../../features/Todo/todo'
import { Spinner } from '../../components/spinnet/Spinner'


export const ToDo = () => {

	const dispatch = useAppDispatch()

	const { todos, loading } = useAppSelector((state) => state.todo);
	
	useEffect(() => {
		void dispatch(fetchTodo())
	}, [dispatch])
	const [value, setValue] = useState<string>('')

	const changeInputValue = (e:ChangeEvent<HTMLInputElement>) => {
				const input = e.target.value
				setValue(input)				
	}

	const submitHandler = async (e:FormEvent<HTMLFormElement>) => {
				e.preventDefault()
				const write : string  = value.trim().split('').join(' ')
				if (write !== '') {
					await dispatch(postTodo({text: value}))
					setValue('')
				}
				
	};

	const deleteHandler = async (key:string | undefined)  => {
		await dispatch(deleteTodo(key)) 
		void dispatch(fetchTodo())
	}
	


	return (
		<>
		<form className='form' onSubmit={event => void submitHandler(event)}>
		
		<Input placeholder='Enter to do tasks' type='text' value={value} onChange={changeInputValue}/>
		<Button children='add' />
		</form>
		{
			loading ? (
        <Spinner />
      ) :

			todos.map((val,index) => {
					return (
						<div key={index} className='todo-list'>
						
						<h3>{val.text}</h3>
						<button className='btn'  onClick={() => {void deleteHandler(val.key)}}>Delete</button>
						
						</div>
					)
				
			})
		}
		</>
	)
}
