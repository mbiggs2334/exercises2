const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name='smitty werbenjagermanjensen' />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));