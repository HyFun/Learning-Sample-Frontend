import React, { Component } from 'react'

import { connect } from 'react-redux'

import { createAddPersonAction } from '../../redux/actions/person'

import uuid from 'uuid'

class Person extends Component {

    get count() {
        return this.props.count
    }
    get persons() {
        return this.props.persons
    }


    add = () => {
        const name = this.inputName.value.trim()
        const age = this.inputAge.value.trim()
        if (!name || !age) {
            return alert('姓名/年龄不能为空')
        }
        const person = { id: uuid(), name, age }
        this.props.addPerson(person)
        this.inputName.value = ''
        this.inputAge.value = ''
    }

    render() {
        return (
            <div>
                <h3>上方组件count为：{this.count}</h3>
                <input ref={c => this.inputName = c} type="text" placeholder="请输入姓名" />
                <input ref={c => this.inputAge = c} type="text" placeholder="请输入年龄" />
                <input type="button" value="添加" onClick={this.add} />
                <ul>
                    {
                        this.persons.map(v => (<li key={v.id}>{v.name}---{v.age}</li>))
                    }
                </ul>
            </div>
        )
    }
}


export default connect(
    state => ({
        count: state.reducerCount.count,
        persons: state.reducerPerson.persons
    }), {
    addPerson: createAddPersonAction
})(Person)