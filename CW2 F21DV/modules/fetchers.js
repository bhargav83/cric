let _nameDataRequest;

/**
 * Lazy loader for name data
 * @returns Promise for data
 */
export async function nameData() {
  if (_nameDataRequest) return await _nameDataRequest;

  _nameDataRequest = Promise.all([
    getCsv('teams-wins.csv'),
    getCsv('batting-statistics.csv'),
  ]);

  return _nameDataRequest;
}

/**
 * Helper to handle casting CSV values appropriately
 * @param {string} filename CSV file name
 * @returns
 */
function getCsv(filename) {
  return d3.csv(filename, (row) => {
    return {
      ...row,
      rank: Number(row.rank),
      count: Number(row.count),
      year: new Date(row.year),
    };
  });
}
