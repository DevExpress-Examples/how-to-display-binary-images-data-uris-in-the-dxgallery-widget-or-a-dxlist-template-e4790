Application1.Index = function(params) {

    var viewModel = {
        dSource: Application1.db.sampleData,
        galleryData: Application1.db.galleryData
    };

    return viewModel;
};