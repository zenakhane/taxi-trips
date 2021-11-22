module.exports = function taxiTrip(pool) {

    async function totalTripCount() {
        tripCount = await pool.query('select count(*) from trips')
        return tripCount.row
    }

    async function findAllRegions() {
        findRegions = await pool.query('select * from regions')
        return findRegions.rows
    }

    async function findTaxisForRegion() {
         
    }

    async function findTripsByRegNumber() {

    }

    async function findTripsByRegion() {

    }

    async function findIncomeByRegNumber() {

    }

    async function findTotalIncomePerTaxi() {

    }

    async function findTotalIncome() {

    }

    async function findTotalIncomeByRegion() {

    }

    return {

        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion

    }


}