export const LottoInfoList = [
  { gameId: 'a1fb5', title: '南韩赛车', interval: '75' },
  { gameId: '83cbc', title: '南韩赛车', interval: '120' },
  { gameId: 'e591a', title: '南韩飞艇', interval: '75' },
  { gameId: '404a8', title: '南韩飞艇', interval: '120' },
  { gameId: '0f80b', title: '南韩快3', interval: '75' },
  { gameId: 'e8ea3', title: '南韩快3', interval: '120' },
  { gameId: '9df2f', title: '南韩时时彩', interval: '75' },
  { gameId: '96fe1', title: '南韩时时彩', interval: '120' },
  { gameId: '41665', title: '南韩11选5', interval: '75' },
  { gameId: 'e69ba', title: '南韩11选5', interval: '120' }
]
export const LottoInfoGroupList = [
  {
    title: '南韩赛车',
    subs: LottoInfoList.slice(0, 2)
  },
  {
    title: '南韩飞艇',
    subs: LottoInfoList.slice(2, 4)
  },
  {
    title: '南韩快3',
    subs: LottoInfoList.slice(4, 6)
  },
  {
    title: '南韩时时彩',
    subs: LottoInfoList.slice(6, 8)
  },
  {
    title: '南韩11选5',
    subs: LottoInfoList.slice(8, 10)
  }
]
