
export default class State {
    static instance = null;
    CurrentUser = "Not set";
    CurrentProperty = "Not Set"
    DisplayWelcomeUser = false;

    static getInstance() {
        if (State.instance == null)
            State.instance = new State();
        return State.instance;
    }
}  
