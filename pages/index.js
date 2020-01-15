import React from 'react'
import Head from 'next/head'
import { connect } from "react-redux";

import { getClasses } from '../actions/classes'

export const Home = ({ classes, getClasses }) => {

    React.useEffect(() => {
        getClasses()
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
                    return (<div class="test" key={i}>{element.name}</div>)
                })
            }
            </div>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        getClasses: () => {
            dispatch(getClasses())
        }
    }
}

const mapStateToProps = (state, props) => {
    return {
        classes: state.classes.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
