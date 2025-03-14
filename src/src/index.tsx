import React from 'react'
import ReactDOM from 'react-dom'
import { AppSwitcher } from './components/App'

interface KintoneEvent {
  record: kintone.types.SavedFields
}

kintone.events.on('app.record.index.show', (event: KintoneEvent) => {
  ReactDOM.render(<AppSwitcher />, kintone.app.getHeaderMenuSpaceElement())
  return event
})

