BaseSchema = new SimpleSchema({
  userId: {
    type: String, label: "사용자", denyUpdate: true,
    autoValue: function() {
      if(this.isUpdate) {
        return this.unset();
      }
      if(this.userId === null && this.isSet && this.value) {
        return this.value;
      }
      return this.userId;
    }
  },
  createdAt: {
    type: Date, label: "생성시간", denyUpdate: true, index: -1,
    autoValue: function() {
      if(this.isInsert) {
        return new Date();
      } else if(this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  },
  updatedAt: {
    type: Date, label: "변경시간", denyInsert: true, optional: true,
    autoValue: function() {
      if(this.isInsert) {
        return this.unset();
      } else if(this.isUpsert) {
        return {$setOnInsert: null};
      } else if(this.isUpdate) {
        return new Date();
      }
    }
  }
});
