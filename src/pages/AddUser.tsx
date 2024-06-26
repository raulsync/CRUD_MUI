import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { addUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  > div {
    margin-top: 20px;
    padding: 5px;
  }
`;

const AddUsers = () => {
  const navigate = useNavigate();

  const initialState = {
    name: '',
    username: '',
    email: '',
    phone: '',
  };

  const [user, setUser] = useState<IState>(initialState);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    await addUser(user);
    navigate('/users');
  };

  return (
    <FormContainer>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => handleInputChange(e)}
          name="name"
        />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input
          onChange={(e) => handleInputChange(e)}
          name="username"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => handleInputChange(e)}
          name="email"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => handleInputChange(e)}
          name="phone"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </FormControl>
    </FormContainer>
  );
};

export interface IState {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default AddUsers;
