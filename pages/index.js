import React, { useEffect } from 'react'
import Head from 'next/head'
import { connect } from "react-redux";

import { getClasses } from '../actions/classes'

const Home = ({ dispatch, classes }) => {

    useEffect(() => {
        dispatch(getClasses())
    }, [])
    console.log(classes)
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
            {
                classes.map((element, i) => {
                    <div key={i}>{element.name}</div>
                })
            }
            </div>
        </div>
    )

}

const mapStateToProps = (state, props) => {
    console.log(state)
    return {
        classes: state.classes.list
    }
}

export default connect(mapStateToProps)(Home)
