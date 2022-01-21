import { render, screen } from '@testing-library/react';
import Stop from '../Stop';

const mockStop = {
  action: "pickup",
  id: 3030124,
  latitude: 30.2676877214881,
  longitude: -97.742035775868,
  stop_number: 1,
  vehicle_id: "141c6e3e-f1ba-446e-8758-74bcb0de8ca1",
  vehicles: 1,
}

const mockStopElement = 
  <table>
    <tbody>
      <Stop 
        key={0}
        stop={mockStop}
      />
    </tbody>
  </table>

it('should render a stop', () => {
  render(mockStopElement)
  const tableRowElement = screen.getByTitle("stop-row")
  expect(tableRowElement).toBeInTheDocument();
});
