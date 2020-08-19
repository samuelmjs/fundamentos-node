import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  outcome: number;
  income: number;
  total: number;
}

interface Response {
  transactions: Transaction[];
  balance: Balance;
}


class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Response{
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();

    return {
      transactions,
      balance
    };
  }
}

export default ListTransactionsService;
