

export default (Module) => {
  const {
    Migration,
    MemoryMigrationMixin,
    initialize, partOf, meta, nameBy, mixin
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(MemoryMigrationMixin)
  class BaseMigration extends Migration {
    @nameBy static  __filename = __filename;
    @meta static object = {};
  }
}
