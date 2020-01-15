import React, { useEffect } from 'react'
import Head from 'next/head'
import { connect } from "react-redux";

import { getClasses } from '../actions/classes'

export const Home = ({ dispatch, classes }) => {

    useEffect(() => {
        dispatch(getClasses())
    }, [])

    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
            {
                classes.map((element, i) => {
                    return (<div key={i}>{element.name}</div>)
                })
            }
            </div>
        </div>
    )

}

const mapStateToProps = (state, props) => {
    return {
        classes: state.classes.list
    }
}

export default connect(mapStateToProps)(Home)
