import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import PostList from './Components/PostList';
import SinglePostPage from './Components/SinglePostPage';
import AddPostForm from './Components/AddPostForm';
import Layout from './Components/Layout';
import EditPostForm from './Components/EditPostForm';
import UserList from './Components/UserList';
import UserPage from './Components/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path='user'>
            <Route index element={<UserList />} />
            <Route path=':userId' element={<UserPage />} />
        </Route>
        
        {/*404 page need to insert */}
        <Route path='*' element={<Navigate to={'/'} replace="/" />} />

      </Route>
    </Routes>

  );
}

export default App;
