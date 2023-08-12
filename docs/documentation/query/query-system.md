---
sidebar_position: 1
---

# Query system

import DummyButton from '@site/src/components/DummyButton';
import ActivePanelSign from '@site/src/components/ActivePanelSign';
import Key from '@site/src/components/Key';
import RunButton from '@site/src/components/RunButton';

The query system allows you to analyse JSON using queries.

To open the `Query` window and analyze JSON from the left panel,
click the left <DummyButton>query</DummyButton> button or use <Key>Alt</Key> + <Key>Q</Key>.

For JSON analysis from the right panel, click the right <DummyButton>query</DummyButton> button or use <Key>AltRight</Key> + <Key>Q</Key>.

<ActivePanelSign/>

### Jsonata

The query system enables you to analyze JSON data using the Jsonata language. See [JSONata documentation](https://docs.jsonata.org/overview).

Jsonata, similar to SQL in the world of databases, serves as a query language within the realm of JSON:

- it offers you select, join, aggregate, sort, filter, and other powerful functionalities;
- you can perform updates on JSON effortlessly;
- conversion of JSON to other JSON structures or alternative text formats becomes feasible.

### Recent queries

At the top of the "Query" window, you will find a list of recent queries.
To execute a recent query, simply click on the corresponding item in the history list ...

### New query

In the middle of the "Query" window, there is a textarea where you can write your own Jsonata queries.
Click on the run <RunButton/> button or use <Key>Ctrl</Key> + <Key>Enter</Key> to execute it and witness the result.

You can also insert text from clipboard by using <Key>right mouse click</Key> .
