import React from 'react';
import { Form } from '@lib';
import { Input, Radio, Select, Textarea } from '@components';

export default class Interactions extends React.Component {
  render() {
    return (
      <Form ref={ this.props.getRef } id="form">
        <Input name="inputOne" />
        <Input name="inputTwo" initialValue="foo" />

        <Radio id="radio1" name="radio" value="cheese" />
        <Radio id="radio2" name="radio" value="potato" checked />
        <Radio id="radio3" name="radio" value="cucumber" />

        <Select name="select" initialValue="two">
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </Select>

        <Textarea name="textareaOne" />
        <Textarea name="textareaTwo" initialValue="something" />
      </Form>
    );
  }
}
