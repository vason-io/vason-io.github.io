---
sidebar_position: 1
---

# HTTP requests

import DummyButton from '@site/src/components/DummyButton';
import Key from '@site/src/components/Key';
import DummySpan from '@site/src/components/DummySpan';
import RunButton from '@site/src/components/RunButton';

Here you can write and send the HTTP REST Requests.

To open the `HTTP` window and activate the `HTTP Requests` tab click the <DummyButton>http</DummyButton> button 
or use <Key>Alt</Key> + <Key>T</Key>. 

### APIs

Retrieve JSON data for analysis by making HTTP requests to different APIs (clouds).

Explore and:

- evaluate prominent APIs from Google or ChatGPT;
- interact with IBM Watson API and Elasticsearch;
- develop and streamline ETL processes using Informatica or IBM Datastage;
- conduct experiments with CI/CD processes on Microsoft Azure.
- Execute numerous HTTP requests to receive and analyze JSON data using this window, resembling the functionality of a curl tool.

### Syntax

HTTP requests follow this syntax, with <DummySpan color="#f9a156">{{variable}}</DummySpan> enclosed in double curly braces.

To write a request, make sure you use the following elements:

- name of request (will also be used for the script): <DummySpan color="#aaaaaa">### name of request</DummySpan>
- HTTP method und url: <DummySpan color="#008000">GET, POST, PUT or DELETE</DummySpan> <DummySpan color="#cd1c1c">url</DummySpan>
- Optionally, you can include:
  - HTTP header(s): <DummySpan color="#650c84">header name</DummySpan>:  <DummySpan color="#650c84">header value</DummySpan> ...
  - <DummySpan color="#0e420e">body</DummySpan>

Feel free to use single-line-<DummySpan color="#cccccc">//comments</DummySpan> between request elements to provide additional context or notes.

Click the run <RunButton/> button to execute the HTTP request