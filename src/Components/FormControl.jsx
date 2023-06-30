import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

export default function FormControl() {
    return (
        <Container>
			<h3 className='mt-5'>Остались вопросы?</h3>
			<p>Оставьте свой номер телефона, и мы вам перезвоним</p>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Ваше имя<span className='text-danger'>*</span></Form.Label>
					<Form.Control  type='text' placeholder="Как к вам можно обратиться?" required/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicTelephone">
					<Form.Label>Телефон<span className='text-danger'>*</span></Form.Label>
					<Form.Control type="text" placeholder="Ваш номер телефона" required />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>E-mail</Form.Label>
					<Form.Control type="email" placeholder="Ваша почта" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Cообщение<span className='text-danger'>*</span></Form.Label>
					<Form.Control as="textarea" rows={3} required />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Согласие на обработку персональных данных" required />
				</Form.Group>
			
				<Button variant="primary" type="submit">				
					Отправить
				</Button>
			</Form>
		</Container>
    )
}
