// import React from 'react';
// import DisplayQuestion from './DisplayQuestion';
// import DisplayHello from './DisplayHello';

// class App extends React.Component {
//     state = {
//         username: "Richa"
//     };

//     render() {
//         return (
//             <>
//                 <DisplayHello username={this.state.username} />
//                 <DisplayQuestion username={this.state.username} />
//             </>
//         );
//     }

// }

// export default App;

import React from 'react';
import DisplayQuestion from './DisplayQuestion';
import DisplayHello from './DisplayHello';

class App extends React.Component {

    render() {
        return (
            <>
                <DisplayHello />
                <DisplayQuestion />
            </>
        );
    }

}

export default App;
