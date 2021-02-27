const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tabletM: '768px',
  tabletL: '1024px',
}

const media = {
  mobileS: `(max-width: ${deviceSizes.mobileS})`,
  mobileM: `(max-width: ${deviceSizes.mobileM})`,
  mobileL: `(max-width: ${deviceSizes.mobileL})`,
  tabletM: `(max-width: ${deviceSizes.tabletM})`,
  tabletL: `(max-width: ${deviceSizes.tabletL})`,
}

export default media
