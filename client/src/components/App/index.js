import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import NavBar from "../NavBar";
import Chart from "../Chart";
import {setStockAction} from "../../store/actions/stockAction";

const App = ({setStockActionHandler}) => {

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8181');
        ws.onopen = e => console.log(e);
        ws.onmessage = e => console.log(JSON.parse(e.data));
        ws.onmessage = e => setStockActionHandler(JSON.parse(e.data));
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <NavBar />
                <Chart />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        setStockActionHandler: stock => dispatch(setStockAction(stock))
    }
};

export default connect(null, mapDispatchToProps)(App);
