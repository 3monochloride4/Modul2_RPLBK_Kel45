import React, { Component } from "react";
export default class Quotes extends Component {
render() {
return (
<div
className="flex flex-col items-center justify-center bg-yellow-50 shadow-md"
style={{ height: "200px" }}
>
<h3 className="font-mono font-bold textxl text-indigo-600">{this.props.quotes}</h3>
<bold className="font-mono textxl text-indigo-600">{this.props.books}</bold>
<p className="font-mono textxl text-indigo-600">-{this.props.author}</p>
</div>
);
}
}