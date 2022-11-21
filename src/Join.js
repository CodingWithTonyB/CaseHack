import {v4 as uid} from 'uuid'
import {supabase} from './supabase.js'
import React, {useEffect, useState, useRef, useLayoutEffect} from "react";
import { Link } from "react-router-dom";

function Join() {

    // const constructor = (props) => {
    //     this.state = {value: ''};
    //
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    //
    // const handleChange = (event) => {
    //     setState({value: event.target.value});
    // }

    const [name, setName] = React.useState('');
    const [eth, setEth] = React.useState('');
    const [operators, setOperators] = React.useState('');
    const [apr, setApr] = React.useState('');
    const [link, setLink] = React.useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const All = [name, eth, operators, apr, link];
        console.log(name)
        console.log(eth)
        console.log(operators)
        console.log(apr)
        console.log(link)
        console.log(All)
        pushToSupaBase();
        alert('Your request was submitted.');
    }

    const pushToSupaBase = async () => {
        try{
            const {data, error} = await supabase
                .from('posts')
                .insert({id: uid(), pool_name: name,eth_staked: eth, nodeoperators: operators, apr: apr, link: link}, {returning: "minimal"});

            if(error){
                throw Error("Error Entering the Database" +  error.message);
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className="text-center color">
            <Link to='/'>
                <button class="btn btn-secondary custom-button" type="submit">Home</button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <h1 class=''>Register your Pool on our Platform</h1>
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div>
                    <label class='padding'>Name of the Pool</label>
                    <input class='padding'id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                </div>
                <div>
                    <label class='padding'>ETH Staked</label>
                    <input class='padding'id="eth" type="text" value={eth} onChange={(e) => setEth(e.target.value)}/>
                </div>
                <div>
                    <label class='padding' >Number of Node Operators</label>
                    <input class='padding'id="operators" type="text" value={operators} onChange={(e) => setOperators(e.target.value)}/>
                </div>
                <div>
                    <label class='padding' >APR %</label>
                    <input class='padding'id="apr" type="text" value={apr} onChange={(e) => setApr(e.target.value)}/>
                </div>
                <div>
                    <label class='padding' >Link to Website</label>
                    <input class='padding'id="link" type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
                </div>
                <br></br>
                    <button class="btn btn-secondary" type="submit">Submit</button>
            </form>
        </div>

    );

}

export default Join;