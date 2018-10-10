class TracksController < ApplicationController

  def index
    @tracks = Track.all || []
    @productions = Production.all.sort_by {|production| production.position} || []
    @labels = Label.all.sort_by {|label| label.position} || []
  end
end
