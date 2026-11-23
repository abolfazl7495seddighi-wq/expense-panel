import './TransactionTable.css';

// تبدیل ارقام انگلیسی به فارسی
const toFa = (str) => String(str).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);

// 3100000 -> ۳,۱۰۰,۰۰۰
const formatAmount = (n) => toFa(n.toLocaleString('en-US'));

function TransactionTable({ transactions }) {
  return (
    <section className="transactions">
      <h2 className="transactions__title">تراکنش‌ها</h2>

      {/* نمایش دسکتاپ: جدول */}
      <table className="transactions__table">
        <thead>
          <tr>
            <th>تاریخ</th>
            <th>درآمد (تومان)</th>
            <th>هزینه (تومان)</th>
            <th>شرح</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td className="transactions__date">{toFa(t.date)}</td>
              <td className="transactions__income">
                {t.type === 'income' && `+${formatAmount(t.amount)}`}
              </td>
              <td className="transactions__expense">
                {t.type === 'expense' && `-${formatAmount(t.amount)}`}
              </td>
              <td>{t.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* نمایش موبایل: کارت */}
      <ul className="transactions__cards">
        {transactions.map((t) => (
          <li key={t.id} className="transactions__card">
            <div className="transactions__card-top">
              <span className="transactions__date">{toFa(t.date)}</span>
              <span
                className={
                  t.type === 'income'
                    ? 'transactions__income'
                    : 'transactions__expense'
                }
              >
                {t.type === 'income' ? '+' : '-'}
                {formatAmount(t.amount)} تومان
              </span>
            </div>
            <p className="transactions__card-desc">{t.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TransactionTable;
