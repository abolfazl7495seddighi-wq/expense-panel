import TransactionTable from './components/TransactionTable';
import { transactions } from './data';

function App() {
  return <TransactionTable transactions={transactions} />;
}

export default App;

