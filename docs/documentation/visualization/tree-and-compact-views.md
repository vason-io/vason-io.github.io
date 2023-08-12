---
sidebar_position: 3
---

import DummyButton from '@site/src/components/DummyButton';
import DummySpan from '@site/src/components/DummySpan';
import ActivePanelSign from '@site/src/components/ActivePanelSign';

# Tree and compact views

The `tree window` allows you to analyze JSON data in a hierarchical tree form, 
providing a visual representation for easier understanding and navigation.

Click the <DummyButton>tree</DummyButton> button on either the left or right side to open the `tree window`. 

Opening the `tree window` from the left side allows you to analyze JSON content from the left JSON panel, 
while opening it from the right side allows analysis of JSON content from the right JSON panel.

You can navigate through the JSON by expanding particular nodes or expand all nodes at once using the "expand all" button.

<ActivePanelSign/>

You can syncronize the tree node with the cursor position at the panel you are analying the JSON in. E.g.

- click somewhere on the JSON text on the left panel;
- then click on the <DummyButton>▷ sync</DummyButton> button;

You may also synchronize the other way around. Just click per node on <DummySpan>◁</DummySpan> to position the cursor in the active JSON panel

It is as well possible to analyze JSON in the compact form.

In this tree form you can see the keys only without the corresponding values. This makes it easier to understand the structure of the JSON.

You can see all the subkeys by mouse hover.

