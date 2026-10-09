import Link from 'next/link';
import { inventory } from '@/lib/mock-data';

export default function InventoryPage() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Resources</p>
          <h1>Inventory</h1>
        </div>
        <Link href="/" className="cta-button secondary">Back to dashboard</Link>
      </div>

      <section className="grid-two">
        {inventory.map((item) => (
          <div key={item.id} className="panel">
            <div className="panel-header">
              <h2>{item.name}</h2>
              <span className="pill">{item.category}</span>
            </div>
            <div className="class-meta">
              <span>Stock: {item.stock}</span>
              <span>Reorder level: {item.reorderLevel}</span>
              <span>Location: {item.location}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
