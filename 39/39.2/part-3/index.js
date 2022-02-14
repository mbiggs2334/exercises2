const App = () => (
    <div>
        <Person name='this is a name' age={19} hobbies={['swimming', 'kayaking', 'basketball']}/>
        <Person name='jim' age={9} hobbies={['running', 'jumping', 'skating']}/>
        <Person name='jimmy longname' age={37} hobbies={['football', 'driving', 'biking']}/>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));