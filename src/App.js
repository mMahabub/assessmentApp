
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App(){
    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className="container">
            <Routes>
            <Route exact path='/' element={
             <>
             <FeedbackForm />
             <FeedbackStats/>
             <FeedbackList />
            </>
            }>
        </Route>
        <Route path='/about' element={<AboutPage/>}>This is browser route</Route>
        </Routes>
      
        </div>
        <AboutIconLink/>
        </Router>
        </FeedbackProvider>
)
}
export default App





































// function App(){
//     const tiltle = 'Blog Post'
//     const body = 'My First Blog Post'

//     const comments = [
//         { id: 1, text: 'comments one'},
//         { id: 2, text: 'comments two'},
//         { id: 3, text: 'comments three'},
//     ]

//     const loading = false
//     const showComments = true
//     if(loading) return <h1>Loading........</h1>
//     const showCommentBlock = (   <div className="comments">
//         <h3>{comments.length}</h3>
//         <ul>
//           {comments.map((comment, index)=> (
//             <li key={index}>{comment.text}</li>
//           ))}
//         </ul>
//     </div>)
//     return (
//         <div className="container">
//             <h1>{tiltle.toLocaleUpperCase()}</h1>
//             <p>{body}</p>
//             {showComments && showCommentBlock}
//         </div>

// )
// }
// export default App