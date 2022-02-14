const App = () => (
    <div>
        <Tweet username='user1' name='name1' date='2/14/2022' message='hellooo'/>
        <Tweet username='user2' name='name2' date='2/14/2022' message='goodbyyee'/>
        <Tweet username='user3' name='name3' date='2/14/2022' message='something ellseee'/>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));