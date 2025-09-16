import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>🙃</h1>
    <p>Доброжелательный текст</p>
    <Link to={'message'}>
      <Button type='primary'>Далее</Button>
    </Link>
  </div>
);

export default Home;
